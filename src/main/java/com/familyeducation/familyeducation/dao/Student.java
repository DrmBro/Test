package com.familyeducation.familyeducation.dao;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
@Entity
@Data
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue
    private Integer userId;

    private String username;

    private String password;

    private String address;

    private String sex;

    private String phone;

    private String grade;

    private Date time;


}