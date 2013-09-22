package org.debz.DAO.hibernate;

import org.debz.DAO.UserDAO;
import org.debz.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * User: tarus
 * Date: 9/16/13
 * Time: 12:30 PM
 */

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    SessionFactory sessionFactory;

    public Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }

    public void addUser(User user) {
        getCurrentSession().save(user);
    }

    public void updateUser(User user) {
        User userToUpdate = getUser(user.getSid());
        userToUpdate.setEmail(user.getEmail());

        getCurrentSession().update(userToUpdate);

    }

    public User getUser(long id) {
        User user = (User) getCurrentSession().get(User.class, id);
        return user;
    }

    public void deleteUser(int id) {
        User user = getUser(id);
        if (user != null)
            getCurrentSession().delete(user);
    }

    @SuppressWarnings("unchecked")
      @Transactional
    public List<User> getUsers() {
       // log.info("Trying to get  number of persons ");
//        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(User.class);
//       // log.info("Got this number of persons "+ criteria.list().size());
//       // criteria.addOrder(Order.asc("sid"));
//        return criteria.list();
        return sessionFactory.getCurrentSession().createQuery("from User").list();
    }

}
