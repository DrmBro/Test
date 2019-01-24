package com.familyeducation.familyeducation.dao;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
@Entity
@Data
@Table(name = "teacher")
public class Teacher {

    @Id
    @GeneratedValue
    private Integer userId;

    private String username;

    private String password;

    private String trueName;

    private String sex;

    private String major;

    private String phone;

    private String address;

    private String course;

    private String details;

    private String school;

    private String money;

    private String picture;

}