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
@Table(name = "tea_order")
public class TeaOrder {

    @Id
    @GeneratedValue
    private Integer orderId;

    private Integer stuId;

    private Integer teaId;

    private String grade;

    private String money;

    private String address;

    private String course;

    private String teaPhone;

    private String stuPhone;

    private String orderState;

}