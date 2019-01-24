package com.familyeducation.familyeducation.controller;


import com.familyeducation.familyeducation.dao.*;
import com.familyeducation.familyeducation.mapper.*;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
@Controller
public class AdminController {

    private static final Logger log = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    TeaOrderRepository teaOrderRepository;

    @Autowired
    OrderListRepository orderListRepository;


    @Autowired
    StuOrderRepository stuOrderRepository;

    @Autowired
    StudentRepository studentRepository;

    @GetMapping("/index")
    public ModelAndView index(HttpServletRequest request) {
        Object user = request.getSession().getAttribute("user");
        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("user",user);
        return modelAndView;
    }

    @GetMapping("/student_register")
    public ModelAndView register() {
        ModelAndView modelAndView = new ModelAndView("student_register");
        return modelAndView;
    }
    @RequestMapping("/logoutuser")
    public String logoutUser(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }


    @GetMapping("/problem")
    public String problem(){
        return "problem";
    }

    @RequestMapping("/login")
    public String login(){
        return "login";
    }

    @PostMapping("/userlogin")
    public String login(Student student, HttpServletRequest request, Teacher teacher) {
        Example<Student> example = Example.of(student);
        student = studentRepository.findOne(example);

        Example<Teacher> example1 = Example.of(teacher);
        teacher = teacherRepository.findOne(example1);
        if (student != null) {
            request.getSession().setAttribute("teacher", teacher);
            request.getSession().setAttribute("student", student);
            request.getSession().setAttribute("user","student");
        } else if(teacher != null){
            request.getSession().setAttribute("teacher", teacher);
            request.getSession().setAttribute("student", student);
            request.getSession().setAttribute("user","teacher");
        }else{
            return "redirect:/login";
        }

        return "redirect:/index";
    }

    @GetMapping("/order_list")
    public ModelAndView orderList(HttpServletRequest request,ModelAndView modelAndView){
        String user = (String) request.getSession().getAttribute("user");
        Teacher teacher = (Teacher)request.getSession().getAttribute("teacher");
        Student student = (Student)request.getSession().getAttribute("student");
        TeaOrder teaOrder = new TeaOrder();
        String eq = "student";
        if(eq.equals(user)){
            OrderList orderList = new OrderList();
            orderList.setUserId(student.getUserId());
            orderList.setOrderState("待处理");
            Example<OrderList> orderListExample = Example.of(orderList);
            List<OrderList> future_teaOrders = orderListRepository.findAll(orderListExample);
            List<Teacher> teachers = new ArrayList<>();
            for(OrderList order:future_teaOrders){
                teacher = teacherRepository.findOne(order.getTeacherId());
                teachers.add(teacher);
            }
            modelAndView.addObject("teachers",teachers);
            modelAndView.addObject("student",student);
            modelAndView.setViewName("student_order_list");
        }else {
            teaOrder = new TeaOrder();
            teaOrder.setTeaId(teacher.getUserId());
            Example<TeaOrder> example = Example.of(teaOrder);
            List<TeaOrder> teaOrders = teaOrderRepository.findAll(example);
            modelAndView.addObject("teacher",teacher);
            modelAndView.addObject("username",teacher.getTrueName());
            modelAndView.addObject("teaOrders",teaOrders);
            modelAndView.setViewName("teacher_order");
        }
        return modelAndView;
    }

    @GetMapping("searchTeacher")
    public ModelAndView search(@Param("course") String course,
                         @Param("sex") String sex,
                         @Param("address") String address,
                         HttpServletRequest request){
        Teacher teacher = new Teacher();
        String num="0";
        if(!num.equals(course)){
            log.info(course);
            teacher.setCourse(course);
        }
        if(!num.equals(sex)){
            log.info(sex);
            teacher.setSex(sex);
        }
        if(!num.equals(address)){
            log.info(address);
            teacher.setAddress(address);
        }
        Example<Teacher> example = Example.of(teacher);
        List<Teacher> teachers = teacherRepository.findAll(example);
        ModelAndView modelAndView = new ModelAndView("teacher_list");
        modelAndView.addObject("teachers",teachers);
        return modelAndView;
    }

    @GetMapping("searchstudent")
    public ModelAndView searchstudent(@Param("course") String course,
                               @Param("grade") String grade,
                               @Param("address") String address){
        StuOrder student = new StuOrder();
        String num = "0";
        if(!num.equals(course)){
            student.setCourse(course);
        }
        if(!num.equals(grade)){
            student.setGrade(grade);
        }
        if(!num.equals(address)){
            student.setAddress(address);
        }
        Example<StuOrder> example = Example.of(student);
        List<StuOrder> students = stuOrderRepository.findAll(example);
        ModelAndView modelAndView = new ModelAndView("student_list_h");
        modelAndView.addObject("students",students);
        return modelAndView;
    }

}
