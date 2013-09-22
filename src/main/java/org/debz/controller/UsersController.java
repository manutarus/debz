package org.debz.controller;

import org.apache.commons.logging.LogFactory;
import org.debz.model.User;
import org.debz.service.UserService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.apache.commons.logging.Log;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * User: tarus
 * Date: 9/18/13
 * Time: 12:32 PM
 */
@Controller

public class UsersController {

    @Autowired
    private UserService userService;

    private static final String LIST_VIEW = "userList";
    private final Log log = LogFactory.getLog(PersonListController.class);

    @RequestMapping(value = "users.json", method = RequestMethod.GET)
    public String printPersonList(ModelMap model) {

        List<User> persons = userService.getUsers();

        model.addAttribute("persons", persons);
        return LIST_VIEW;
    }
    @RequestMapping(value = "/list/users.json", method = RequestMethod.GET)
    public
    @ResponseBody
    String listUsersJson(ModelMap model) throws JSONException {
        JSONArray userArray = new JSONArray();
        for (User user : userService.getUsers()) {
            JSONObject userJSON = new JSONObject();
            userJSON.put("id", user.getSid());
            userJSON.put("names", user.getO_name());
            userJSON.put("level", user.getLevel());
            userArray.put(userJSON);
        }
        return userArray.toString();
    }


}