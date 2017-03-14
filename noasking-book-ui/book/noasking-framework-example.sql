/*
Navicat MySQL Data Transfer

Source Server         : Dell_NoteBook_Mysql
Source Server Version : 50715
Source Host           : localhost:3306
Source Database       : noasking-framework-example

Target Server Type    : MYSQL
Target Server Version : 50715
File Encoding         : 65001

Date: 2017-03-13 18:12:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bs_book
-- ----------------------------
DROP TABLE IF EXISTS `bs_book`;
CREATE TABLE `bs_book` (
  `ID` bigint(20) NOT NULL,
  `BOOK_NAME` varchar(128) NOT NULL,
  `CREATE_USER_ID` bigint(20) NOT NULL,
  `CREATE_TIME` datetime NOT NULL,
  `LAST_UPDATE_TIME` datetime NOT NULL,
  `LAST_UPDATE_USER_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bs_book
-- ----------------------------
INSERT INTO `bs_book` VALUES ('1', 'Java语言规范：基于Java SE 8', '1', '2017-03-13 14:50:43', '2017-03-13 14:50:45', '1');

-- ----------------------------
-- Table structure for bs_chater
-- ----------------------------
DROP TABLE IF EXISTS `bs_chater`;
CREATE TABLE `bs_chater` (
  `ID` bigint(20) NOT NULL,
  `BOOK_ID` bigint(20) NOT NULL COMMENT '所属书籍ID',
  `CHATER_NUM` int(11) NOT NULL COMMENT '章节编号(1-*)，还起着排序作用，可以为负数，但是负数不显示',
  `CHATER_NAME` varchar(255) NOT NULL COMMENT '章节名称',
  `PARENT_ID` bigint(20) NOT NULL COMMENT '父章节ID，如果是0，是根节点',
  `HAS_CONTENT` varchar(4) NOT NULL DEFAULT 'Y' COMMENT '是否有内容(Y：是；N：否)，如果否则显示子章节最前的内容',
  `CREATE_USER_ID` bigint(20) NOT NULL COMMENT '创建用户ID',
  `CREATE_TIME` datetime NOT NULL COMMENT '创建时间',
  `LAST_UPDATE_USER_ID` bigint(20) NOT NULL COMMENT '最后更新用户ID',
  `LAST_UPDATE_TIME` datetime NOT NULL COMMENT '最后更新时间',
  `RES_URL` varchar(255) NOT NULL COMMENT '资源目录，对应的请求目录的地址',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bs_chater
-- ----------------------------
INSERT INTO `bs_chater` VALUES ('1', '1', '-2', '译者序', '0', 'Y', '1', '2017-03-13 14:52:03', '1', '2017-03-13 14:52:08', '111');
INSERT INTO `bs_chater` VALUES ('2', '1', '-1', '前言', '0', 'Y', '1', '2017-03-13 14:59:26', '1', '2017-03-13 14:59:31', '222');
INSERT INTO `bs_chater` VALUES ('3', '1', '1', '概述', '0', 'N', '1', '2017-03-13 15:01:02', '1', '2017-03-13 15:01:06', '222');
INSERT INTO `bs_chater` VALUES ('4', '1', '1', '本书结构', '3', 'Y', '1', '2017-03-13 15:02:00', '1', '2017-03-13 15:02:11', '333');
INSERT INTO `bs_chater` VALUES ('5', '1', '2', '样例程序', '3', 'Y', '1', '2017-03-13 15:03:32', '1', '2017-03-13 15:03:35', '444');

-- ----------------------------
-- Table structure for t_goods
-- ----------------------------
DROP TABLE IF EXISTS `t_goods`;
CREATE TABLE `t_goods` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `goodsName` varchar(255) DEFAULT NULL,
  `stock` int(18) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL COMMENT '单价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_goods
-- ----------------------------
INSERT INTO `t_goods` VALUES ('1', '玫瑰花', '1', '2017-01-18 10:54:28', '10');
INSERT INTO `t_goods` VALUES ('2', '牡丹花', '2', '2017-01-18 10:54:42', '20');
INSERT INTO `t_goods` VALUES ('3', '水仙', '3', '2017-01-18 10:54:53', '30');
