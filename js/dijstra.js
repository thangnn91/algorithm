 let graph = [[ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
                                      [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
                                      [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
                                      [ 0, 0, 7, 0, 9, 14, 0, 0, 0 ],
                                      [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
                                      [ 0, 0, 4, 14, 10, 0, 2, 0, 0 ],
                                      [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
                                      [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
                                      [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ];
        let src = 0;
        let len = graph.length;
        let max = 2**32;
	var dijstra = function(){
		let dist = [];
		let sptSet = [];
		for(const index in graph){
			dist[index] = max;
			sptSet[index] = false;
		}
		dist[src] = 0;
		
		for(let i =0 ;i <len-1;i++ ){
			let u = minDistance(dist,sptSet);
			sptSet[u] = true;
			for(const index in graph){
				if (!sptSet[index] && graph[u][index] != 0 &&  dist[u] != max && dist[u] + graph[u][index] < dist[index]){
					dist[index] = dist[u] + graph[u][index];
				}
			}
		}
		console.log(dist);
		return dist;
	}
	
	var minDistance = function(dist, sptSet){
		let min = max; let min_index = -1;
		for(let v = 0; v< len;v++){
			if (!sptSet[v] && dist[v] <= min) { 
				min = dist[v]; 
				min_index = v; 
			} 
		}
		return min_index;
	}
