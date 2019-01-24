package com.familyeducation.familyeducation.controller;

import com.familyeducation.familyeducation.dao.*;
import com.familyeducation.familyeducation.mapper.OrderListRepository;
import com.familyeducation.familyeducation.mapper.StuOrderRepository;
import com.familyeducation.familyeducation.mapper.TeaOrderRepository;
import com.familyeducation.familyeducation.mapper.TeacherRepository;
import com.familyeducation.familyeducation.util.FileUtils;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
@Controller
public class TeacherController {

    private static final Logger log = LoggerFactory.getLogger(TeacherController.class);

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StuOrderRepository stuOrderRepository;

    @Autowired
    private TeaOrderRepository teaOrderRepository;

    private final ResourceLoader resourceLoader;

    @Autowired
    private OrderListRepository orderListRepository;

    Integer sht = 6, logn = 16;


    @Autowired
    public TeacherController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @Value("${web.upload-path}")
    private String path;

    @PostMapping("/fileUpload")
    public ModelAndView upload(@RequestParam("filename") MultipartFile file, Map<String, Object> map, HttpServletRequest request, Teacher teacher) {

        ModelAndView modelAndView = new ModelAndView();

        if (teacher.getUsername() == null || teacher.getUsername() == "") {
            modelAndView.setViewName("teacher_register");
            return modelAndView;
        }

        if (teacher.getPassword().length() < sht || teacher.getPassword().length() > logn) {
            modelAndView.setViewName("teacher_register");
            return modelAndView;
        }
        try {
//            Teacher teacher1 = new Teacher();
//            teacher1.setUsername(teacher.getUsername());
//            Example<Teacher> example = Example.of(teacher1);
//            if (teacherRepository.findOne(example) != null) {
//                modelAndView.setViewName("teacher_register");
//                return modelAndView;
//            }
        } catch (Exception e) {
            modelAndView.setViewName("teacher_register");
            return modelAndView;
        }

        String p = System.getProperty("user.dir");
        // 要上传的目标文件存放路径
        String localPath = "C:\\img";
        // 上传成功或者失败的提示

        String realpath = "";
        try{
            if(file != null){
                realpath = FileUtils.upload(file, localPath, file.getOriginalFilename());
                String msg = "";
                String flag = "false";
                if (!flag.equals(realpath)) {
                    msg = "上传成功！";
                } else {
                    msg = "上传失败！";
                }
                // 显示图片
                map.put("msg", msg);
                map.put("fileName", file.getOriginalFilename());
            }
        }catch (Exception e){
            log.error(e.getMessage());
        }
        teacher.setPicture(realpath);
        teacherRepository.save(teacher);
        modelAndView = new ModelAndView("login");
        modelAndView.addObject("map", map);
        return modelAndView;
    }

    @RequestMapping("show")
    public ResponseEntity showPhotos(String fileName) {
        try {
            // 由于是读取本机的文件，file是一定要加上的， path是在application配置文件中的路径
            return ResponseEntity.ok(resourceLoader.getResource("file:" + path + fileName));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/teacher_register")
    public ModelAndView teacherLogin() {
        ModelAndView modelAndView = new ModelAndView("teacher_register");
        return modelAndView;
    }

    @GetMapping("/teacher_details")
    public ModelAndView teacherDetails(@Param("userId") String userId) {
        ModelAndView modelAndView = new ModelAndView("teacher_details");
        Teacher teacher = teacherRepository.findOne(Integer.parseInt(userId));
        modelAndView.addObject("teacher",teacher);
        return modelAndView;
    }

    @RequestMapping("/teacher_list")
    public ModelAndView teacherList(ModelAndView modelAndView){
        modelAndView.setViewName("teacher_list");
        List<Teacher> teachers =  teacherRepository.findAll();
        modelAndView.addObject("teachers",teachers);
        return modelAndView;
    }

    @PostMapping("/teacher_register_form")
    public ModelAndView teacherRegisterForm(Teacher teacher){
        ModelAndView modelAndView = new ModelAndView();
        if (teacher.getUsername() == null || teacher.getUsername() == "") {
            modelAndView.setViewName("teacher_register_form");
            return modelAndView;
        }
        if (teacher.getPassword().length() < sht || teacher.getPassword().length() > logn) {
            modelAndView.setViewName("teacher_register_form");
            return modelAndView;
        }
        try {
            String username = teacher.getUsername();
            Teacher teacher1 = new Teacher();
            teacher1.setUsername(teacher.getUsername());
            Example<Teacher> example = Example.of(teacher1);
            if (teacherRepository.findOne(example) != null) {
                modelAndView.setViewName("teacher_register_form");
                return modelAndView;
            }
            teacherRepository.save(teacher);
        } catch (Exception e) {
            modelAndView.setViewName("teacher_register_form");
            return modelAndView;
        }
        try {
            teacherRepository.save(teacher);
        }catch (Exception e){
            log.error(e.getMessage());
            modelAndView.setViewName("teacher_register_form");
            return modelAndView;
        }
        modelAndView.setViewName("login");
        return modelAndView;
    }

    @GetMapping("/appointment")
    public String appointment(@Param("orderId") String orderId,HttpServletRequest request){
        String user = (String)request.getSession().getAttribute("user");

        String stu = "student";
        if(stu.equals(user)){
            return "test";
        } else{
            StuOrder stuOrder = stuOrderRepository.findOne(Integer.parseInt(orderId));
            String state = "可预约";
            if(!state.equals(stuOrder.getOrderState())) {
                return "test";
            }
            stuOrder.setOrderState("可预约");

            Teacher teacher = (Teacher)request.getSession().getAttribute("teacher");
            TeaOrder teaOrder = new TeaOrder();
            teaOrder.setStuId(stuOrder.getUserId());
            teaOrder.setOrderState("待预约");
            teaOrder.setTeaId(teacher.getUserId());
            teaOrder.setAddress(stuOrder.getAddress());
            teaOrder.setCourse(stuOrder.getCourse());
            teaOrder.setGrade(stuOrder.getGrade());
            teaOrder.setTeaPhone(teacher.getPhone());
            teaOrder.setMoney(stuOrder.getMoney());
            teaOrder.setStuPhone(stuOrder.getStuPhone());
            System.out.println(teaOrder);
            teaOrderRepository.save(teaOrder);
        }
        return "redirect:/order_list";
    }

    @GetMapping("/accessorder")
    public String accessorder(Integer orderId){
        TeaOrder teaOrder = teaOrderRepository.findOne(orderId);
        teaOrder.setOrderState("预约成功");
        teaOrderRepository.save(teaOrder);
        return "redirect:/order_list";
    }

    @GetMapping("/refuseorder")
    public String refuseorder(Integer orderId){
        teaOrderRepository.delete(orderId);
        return "redirect:/order_list";
    }

    @GetMapping("/stu_appointment")
    public String stuAppointment(@Param("userId") String userId,HttpServletRequest request){
        String user = (String)request.getSession().getAttribute("user");
        String tea = "teacher";
        if(tea.equals(user)){
            return "test";
        }else {
            Student student = (Student)request.getSession().getAttribute("student");
            log.info(String.valueOf(student));
            OrderList orderList = new OrderList();
            orderList.setUserId(student.getUserId());
            orderList.setTeacherId(Integer.parseInt(userId));
            orderList.setOrderState("待定");
            orderListRepository.save(orderList);
        }
        return "redirect:/order_list";
    }
}
