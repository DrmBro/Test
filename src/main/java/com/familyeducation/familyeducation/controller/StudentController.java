package com.familyeducation.familyeducation.controller;

import com.familyeducation.familyeducation.dao.StuOrder;
import com.familyeducation.familyeducation.dao.Student;
import com.familyeducation.familyeducation.mapper.StuOrderRepository;
import com.familyeducation.familyeducation.mapper.StudentRepository;
import com.familyeducation.familyeducation.mapper.TeaOrderRepository;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
@Controller
public class StudentController {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    StuOrderRepository stuOrderRepository;
    @Autowired
    TeaOrderRepository teaOrderRepository;

    Integer sht = 6,logn = 16;

    @PostMapping("/student_register")
    public ModelAndView addStudent(Student student, BindingResult bindingResult, ModelAndView modelAndView) {
        modelAndView.setViewName("login");
        if (student.getUsername() == null || student.getUsername() == "") {
            modelAndView.setViewName("student_register");
            return modelAndView;
        }
        if (student.getPassword().length() < sht || student.getPassword().length() > logn) {
            modelAndView.setViewName("student_register");
            return modelAndView;
        }
        try {
            String username = student.getUsername();
            Student student1 = new Student();
            student1.setUsername(student.getUsername());
            Example<Student> example = Example.of(student1);
            if (studentRepository.findOne(example) != null) {
                modelAndView.setViewName("student_register");
                return modelAndView;
            }
            studentRepository.save(student);
        } catch (Exception e) {
            modelAndView.setViewName("student_register");
            return modelAndView;
        }
        return modelAndView;
    }
    @GetMapping("/student_list")
    public ModelAndView studentList(ModelAndView modelAndView, HttpServletRequest request){
        List<StuOrder> students = stuOrderRepository.findAll();
        modelAndView.setViewName("student_list_h");
        modelAndView.addObject("students",students);
        return modelAndView;
    }

    @GetMapping("student_order")
    public String studentOrder(@Param("orderId") String orderId,Model model){
        model.addAttribute("stu_order",stuOrderRepository.findOne(Integer.parseInt(orderId)));
        return "student_order";
    }

    @GetMapping("cancelorder")
    public String cancelOrder(@Param("orderId") String orderId){
        teaOrderRepository.delete(Integer.parseInt(orderId));
        return "redirect:/order_list";
    }

    @RequestMapping("add_stu_order")
    public String studentPublicOrder(StuOrder stuOrder){
        stuOrder.setOrderState("可预约");
        stuOrderRepository.save(stuOrder);
        return "redirect:/student_list";
    }

    @GetMapping("student_public_order")
    public String studentPublicOrder(){
        return "student_public_order";
    }

}
