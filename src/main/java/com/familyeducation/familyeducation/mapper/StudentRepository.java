package com.familyeducation.familyeducation.mapper;


import com.familyeducation.familyeducation.dao.Student;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
public interface StudentRepository extends JpaRepository<Student,Integer> {
}
