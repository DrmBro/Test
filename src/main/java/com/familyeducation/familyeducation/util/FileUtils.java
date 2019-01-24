package com.familyeducation.familyeducation.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;

/**
 * Demo class
 *
 * @author Drm
 * @date 2018/12/7
 */
public class FileUtils {

    public static String upload(MultipartFile file, String path, String fileName){

        // 生成新的文件名
        String uuidName = FileNameUtils.getFileName(fileName);
        String realPath = path + "\\" + uuidName;
        //使用原文件名
//        String realPath = path + "/" + fileName;

        File dest = new File(realPath);
        //判断文件父目录是否存在
        if(!dest.getParentFile().exists()){
            dest.getParentFile().mkdir();
        }
        try {
            //保存文件
            file.transferTo(dest);
            return uuidName;
        } catch (Exception e) {
            System.out.println(e);
            return "false";
        }

    }
}