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
@Table(name = "stu_order")
public class StuOrder {

    @Id
    @GeneratedValue
    private Integer orderId;

    private Integer userId;

    private String address;

    private String grade;

    private String money;

    private String teaSex;

    private String time;

    private String course;

    private String details;

    private String orderState;

    private String stuPhone;

}