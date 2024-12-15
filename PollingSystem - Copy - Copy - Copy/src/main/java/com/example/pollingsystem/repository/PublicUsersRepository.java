package com.example.pollingsystem.repository;

import com.example.pollingsystem.entity.PublicUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PublicUsersRepository extends JpaRepository<PublicUsers,Long> {

    Optional<PublicUsers> findByUserName(String userName);

    Optional<PublicUsers> findByUserNameAndPassword(String userName, String password);

    //List<PublicUsers> findByIsLoggedIn(boolean isLoggedIn);


}
