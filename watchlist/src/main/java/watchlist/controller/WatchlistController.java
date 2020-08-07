package watchlist.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import watchlist.model.watchlist;
import watchlist.repositories.WatchlistRepository;

@RestController
@RequestMapping("/watchlist")
public class WatchlistController {

	@Autowired
	WatchlistRepository watchlistRepository;
	
	
	@GetMapping("/findall")
	public List<watchlist> fetchAll(){
		
		return this.watchlistRepository.findAll();
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addWatchlist(@RequestBody watchlist watchlist){
		return new ResponseEntity<>(this.watchlistRepository.save(watchlist),HttpStatus.CREATED );
		
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<?>  deletewatchlist(@PathVariable Integer id){
		
		if(this.watchlistRepository.findById(id).isPresent()) {
			this.watchlistRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
				
			
		}
	@PutMapping("update/{id}")
	public ResponseEntity<?>  updatewatchlist(@PathVariable Integer id, @RequestBody watchlist watchlist ){
		if(this.watchlistRepository.findById(id).isPresent()) {
			watchlist.setId(id);
			return new ResponseEntity<>(this.watchlistRepository.save(watchlist), HttpStatus.OK);
		}
		else {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);


		}

		
		
	}
	@GetMapping("/findById/{id}")
	public ResponseEntity<?> findById(@PathVariable Integer id){
		if(this.watchlistRepository.findById(id).isPresent()) {
			return new ResponseEntity<>(this.watchlistRepository.findById(id),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}
		

		
	}
	
	
	
	
		
	}
	


