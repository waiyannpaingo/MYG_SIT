package com.org.samplelogin;
//To test the data access layer/ repository layer of user

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.org.samplelogin.entity.UserEntity;
import com.org.samplelogin.repository.UserRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false) //to make sure all the operations are committed to the database
public class UserRepositoryTests {
	 @Autowired
	 private UserRepository repo;
	 
	 @Autowired
	 private TestEntityManager entityManager;
	 
	 @Test
	 public void testCreateUser() {
		 UserEntity user = new UserEntity();
		 user.setEmail("ErikAung@gmail.com");
		 user.setPassword("Huat8888");
		 user.setFirstName("Erik");
		 user.setLastName("Aung");
		 
		 UserEntity saveUser = repo.save(user); //save method is provided by CrudRepository
		 
		 UserEntity existUser = entityManager.find(UserEntity.class, saveUser.getId());
		 
		 assertThat(existUser.getEmail()).isEqualTo(user.getEmail());
		 
	 }
	 
		@Test
		public void testFindByEmail() {
			String email = "ErikAung@gmail.com";
			UserEntity user = repo.findByEmail(email);
			
			assertThat(user.getEmail()).isEqualTo(email);
		}
}
