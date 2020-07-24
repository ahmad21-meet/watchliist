package watchlist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import watchlist.model.watchlist;
@Repository
public interface WatchlistRepository extends JpaRepository<watchlist, Integer> {
	

}
