package crschmit.springstuff.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import crschmit.springstuff.entities.Person;

public interface PersonRepository extends JpaRepository<Person, Integer> {

	Person findByGivenName(String givenName);
	Person findByFamilyName(String familyName);
	
}
