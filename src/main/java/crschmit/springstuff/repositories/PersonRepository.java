package crschmit.springstuff.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import crschmit.springstuff.entities.Person;

public interface PersonRepository extends JpaRepository<Person, Integer> {

	List<Person> findByGivenName(String givenName);
	List<Person> findByFamilyName(String familyName);
	
}
