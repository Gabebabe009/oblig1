package com.example.oblig1js;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ticketController {
    private final List<tickets> allTickets = new ArrayList<>();

    @GetMapping("getMovies")
    public List<Movies> getMovies(){
        List<Movies> listMovies = new ArrayList<>();
        listMovies.add(new Movies("Choose a movie"));
        listMovies.add(new Movies("Saltburn"));
        listMovies.add(new Movies("Pulp Fiction"));
        listMovies.add(new Movies("Fight club"));
        listMovies.add(new Movies("Se7en"));
        listMovies.add(new Movies("Interstellar"));
        listMovies.add(new Movies("The Silence of the Lambs"));
        return listMovies;
    }
    @GetMapping("/getAll")
    public List<tickets> getAll(){return allTickets;}

    @PostMapping("/save")
    public void saveTickets(tickets inTicket){allTickets.add(inTicket);}
    @GetMapping("/deleteAll")
    public void deleteAll(){allTickets.clear();}
}
