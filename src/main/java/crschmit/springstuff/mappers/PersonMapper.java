package crschmit.springstuff.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import crschmit.springstuff.dtos.NewPersonDto;
import crschmit.springstuff.dtos.PersonDto;
import crschmit.springstuff.entities.Person;

@Mapper(componentModel = "spring")
public interface PersonMapper {
	@Mappings({
		@Mapping(source="givenName", target="givenName"),
		@Mapping(source="familyName", target="familyName"),
		@Mapping(source="dateOfBirth", target="dateOfBirth")
	})
	PersonDto toPersonDto(Person p);
	
	@Mappings({
		@Mapping(source="givenName", target="givenName"),
		@Mapping(source="familyName", target="familyName"),
		@Mapping(source="dateOfBirth", target="dateOfBirth")
	})
	Person toPerson(PersonDto p);
	
	@Mappings({
		@Mapping(source="givenName", target="givenName"),
		@Mapping(source="familyName", target="familyName"),
		@Mapping(source="dateOfBirth", target="dateOfBirth")
	})
	Person toPerson(NewPersonDto p);
}
