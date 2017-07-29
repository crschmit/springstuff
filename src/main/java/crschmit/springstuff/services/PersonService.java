package crschmit.springstuff.services;

import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Service;

import crschmit.springstuff.dtos.PersonDto;
import crschmit.springstuff.entities.Person;
import crschmit.springstuff.mappers.PersonMapper;
import crschmit.springstuff.repositories.PersonRepository;

@Service
public class PersonService {

	private PersonRepository personRepository;
	private PersonMapper personMapper;
	
	public PersonService(PersonRepository personRepository, PersonMapper personMapper) {
		this.personRepository = personRepository;
		this.personMapper = personMapper;
	}
	
	public List<Person> getAll() {
		return personRepository.findAll();
	}

	public Person save(Person person) {
		return personRepository.save(person);
	}

}
