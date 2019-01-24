package com.familyeducation.familyeducation.mapper;

import com.familyeducation.familyeducation.dao.OrderList;
import com.familyeducation.familyeducation.dao.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @Author: Drm
 * @Description:
 * @Date: Created in 17:47 2018/12/20
 * @Modified By:
 */
public interface OrderListRepository extends JpaRepository<OrderList,Integer>, JpaSpecificationExecutor<Teacher> {
}
