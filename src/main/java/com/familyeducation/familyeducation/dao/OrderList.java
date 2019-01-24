package com.familyeducation.familyeducation.dao;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @Description //TODO
 * @Author Drm
 * @Date
 **/
@Entity
@Data
@Table(name = "orderList")
public class OrderList {

    @Id
    private Integer orderId;

    private Integer userId;

    private Integer teacherId;

    private String orderState;

    public OrderList() {

    }
}
