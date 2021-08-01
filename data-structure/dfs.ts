

let visited1 = undefined
function dfs1(g: Graphlk, v: number) {
  if (!visited1) visited1 = Array.of(g.vexnum)

  visited1[v] = 1
  let p = g.adjalist[v].first

  while(p != null){
    if (!visited1[p.adjavex]) {
      dfs1(g, p.adjavex)
    }

    p = p.next
  }
}


let visited2 = undefined
function dfs2(g: Graph, v: number) {
  if (!visited2) visited2 = Array.of(g.vexnum)

  visited2[v] = 1

  for (let i = 0; i < g.vexnum; i++) {
    const m = g.arcs[v][i]

    if(m && !visited2[i]){
      dfs2(g, i)
    }
  }
}