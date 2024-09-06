class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        

        ArrayList<List<Integer>> adj = new ArrayList<>();

        for(int i = 0 ; i < n ; i++){
            adj.add(new ArrayList());
        }

        for(int[] edge : edges){
            int x = edge[0];
            int y = edge[1];

            adj.get(x).add(y);
            adj.get(y).add(x);
        }

        int status[] = new int[n];
        int dist[] = new int[n];

        Arrays.fill(status,0);
        Arrays.fill(dist,-1);

        Queue <Integer> q = new LinkedList<>();
        q.add(source);
        status[source] = 1;
        dist[source] = 0;

        while(!q.isEmpty()){
            int i = q.poll();
            if(i == destination) return true;
            List<Integer> l = adj.get(i);

            for(int j : l){
                if(status[j]==0){
                    status[j] = 1;
                    dist[j] = dist[i]+1;
                    q.add(j);
                }
            }
        }
        return false;
    }
}
