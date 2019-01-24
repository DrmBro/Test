package com.familyeducation.familyeducation.util;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
public class FileNameUtils {

    public static String getSuffix(String fileName){
        return fileName.substring(fileName.lastIndexOf("."));
    }

    public static String getFileName(String fileOriginName){
        return UUIDUtils.getUUID() + FileNameUtils.getSuffix(fileOriginName);
    }

}