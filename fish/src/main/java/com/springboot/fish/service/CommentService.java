package com.springboot.fish.service;

import com.springboot.fish.domain.Comment;
import com.springboot.fish.domain.User;
import com.springboot.fish.domain.Video;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Map;

public class CommentService {
    //保存文件
    public static boolean saveFile(MultipartFile partfile,String filename){
        try{
            //文件大小
            Long size=partfile.getSize();
            //文件类型
            String contentType=partfile.getContentType();
            //存储路径
            String filepath="G://IDEA//fish//src//main//resources//static//video//"+filename;

            File demofile=new File(filepath);
            //上传文件
            partfile.transferTo(demofile);
            return true;
        }catch (Exception e){
            return false;
        }
    }


    //传送文件

}
