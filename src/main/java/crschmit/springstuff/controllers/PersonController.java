package crschmit.springstuff.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crschmit.springstuff.dtos.NewPersonDto;
import crschmit.springstuff.dtos.PersonDto;
import crschmit.springstuff.entities.Person;
import crschmit.springstuff.mappers.PersonMapper;
import crschmit.springstuff.services.PersonService;

@RestController
@RequestMapping("person")
public class PersonController {
	
	private PersonService personService;
	private PersonMapper personMapper;
	
	public PersonController(PersonService personService, PersonMapper personMapper) {
		this.personService = personService;
		this.personMapper = personMapper;
	}
	
	// Get all Persons
	@GetMapping("/")
	public List<PersonDto> getAll(HttpServletResponse response) {
		response.setStatus(HttpServletResponse.SC_ACCEPTED);
		
		return personService.getAll().stream()
					.filter(person -> !person.getDeleted())
					.map(personMapper::toPersonDto)
					.collect(Collectors.toList());
	}
	
	// Add a Person
	@PostMapping("/")
	public PersonDto create(@RequestBody NewPersonDto person, HttpServletResponse response) {
		response.setStatus(HttpServletResponse.SC_CREATED);
		
		Person newPerson = personMapper.toPerson(person);
		newPerson.setDeleted(false);
		// do some stuff to new Person ...
		personService.save(newPerson);
		PersonDto newPersonDto = personMapper.toPersonDto(newPerson);
		// do some stuff to the new Dto ...
		
		return newPersonDto;
	}
	
}
