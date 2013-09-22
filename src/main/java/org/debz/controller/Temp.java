package org.debz.controller;

import org.debz.service.PersonService;
import org.debz.service.impl.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * User: tarus
 * Date: 9/13/13
 * Time: 10:52 AM
 */
public class Temp {

   // @Autowired
    private static PersonServiceImpl personService;


    public static void main(String[] args) {
       // PersonListController personListController =new  PersonListController();
        System.out.println(personService.getPersonById(1));

    }
}
