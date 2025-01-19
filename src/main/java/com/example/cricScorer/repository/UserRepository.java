package com.example.cricScorer.repository;

import com.example.cricScorer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}