package com.familyeducation.familyeducation.dao;

import lombok.Data;

import javax.persistence.Entity;
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
@Table(name = "administrators")
public class Administrators {

    @Id
    private Integer userId;

    private String username;

    private String password;

}