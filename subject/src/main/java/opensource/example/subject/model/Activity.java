package opensource.example.subject.model;

import com.opencsv.bean.CsvBindByName;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.*;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

/*
@Getter
@Setter
@Entity
@Table(name = "activities")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @CsvBindByName(column = "actBeginTm")
    @Column(name = "begin_time")
    private Integer beginTime;

    @CsvBindByName(column = "actEndTm")
    @Column(name = "end_time")
    private Integer endTime;

    @CsvBindByName(column = "place")
    @Column(name = "place")
    private String place;

    @CsvBindByName(column = "adultPosblAt")
    @Column(name = "adult_possible")
    private Boolean adultPossible;

    @CsvBindByName(column = "regionCode")
    @Column(name = "region_code")
    private String regionCode;

    @CsvBindByName(column = "organizationName")
    @Column(name = "organization_name")
    private String organizationName;

    @CsvBindByName(column = "noticeBgnde")
    @Column(name = "notice_start_date")
    private LocalDate noticeStartDate;

    @CsvBindByName(column = "noticeEndde")
    @Column(name = "notice_end_date")
    private LocalDate noticeEndDate;

    @CsvBindByName(column = "progrmBgnde")
    @Column(name = "program_start_date")
    private LocalDate programStartDate;

    @CsvBindByName(column = "progrmEndde")
    @Column(name = "program_end_date")
    private LocalDate programEndDate;

    @CsvBindByName(column = "progrmRegistNo")
    @Column(name = "program_register_number")
    private Integer programRegisterNumber;

    @CsvBindByName(column = "progrmSj")
    @Column(name = "program_subject", columnDefinition = "TEXT")
    private String programSubject;

    @CsvBindByName(column = "progrmSttusSe")
    @Column(name = "program_status")
    private Integer programStatus;

    @CsvBindByName(column = "sigunguCode")
    @Column(name = "province_code")
    private String provinceCode;

    @CsvBindByName(column = "sidoCode")
    @Column(name = "service_class_code")
    private String serviceClassCode;

    @CsvBindByName(column = "url")
    @Column(name = "url", columnDefinition = "TEXT")
    private String url;

    @CsvBindByName(column = "yngbgsPosblAt")
    @Column(name = "youth_possible")
    private Boolean youthPossible;

    // 생성자, getter, setter 등의 코드는 생략합니다.
}


 */

@Getter
@Setter
@Entity
@Table(name = "activities")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "begin_time")
    private Integer beginTime;

    @Column(name = "end_time")
    private Integer endTime;

    @Column(name = "place")
    private String place;

    @Column(name = "AdultPossible")
    private Boolean adultPossible;

    @Column(name = "region_code")
    private String regionCode;

    @Column(name = "organization_name")
    private String organizationName;

    @Column(name = "notice_start_date")
    private LocalDate noticeStartDate;

    @Column(name = "notice_end_date")
    private LocalDate noticeEndDate;

    @Column(name = "program_start_date")
    private LocalDate programStartDate;

    @Column(name = "program_end_date")
    private LocalDate programEndDate;

    @Column(name = "program_register_number")
    private Integer programRegisterNumber;

    @Column(name = "program_subject", columnDefinition = "TEXT")
    private String programSubject;

    @Column(name = "program_status")
    private Integer programStatus;

    @Column(name = "province_code")
    private String provinceCode;

    @Column(name = "service_class_code")
    private String serviceClassCode;

    @Column(name = "url", columnDefinition = "TEXT")
    private String url;

    @Column(name = "youth_possible")
    private Boolean youthPossible;

}

