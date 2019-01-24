package com.familyeducation.familyeducation.util;

import java.util.UUID;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
public class UUIDUtils {

    public static String getUUID(){
        return UUID.randomUUID().toString().replace("-", "");
    }

}
