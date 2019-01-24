package com.familyeducation.familyeducation.mapper;


import com.familyeducation.familyeducation.dao.Administrators;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
public interface AdminRepository extends JpaRepository<Administrators,Integer> {
}
