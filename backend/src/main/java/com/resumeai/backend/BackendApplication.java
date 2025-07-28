package com.resumeai.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		System.out.println(">>>>> Starting main method");
		SpringApplication.run(BackendApplication.class, args);
		System.out.println(">>>>> Main method completed");
	}

}
