

let visited1 = undefined
function bfs1(g: Graphlk, v: number) {
  if (!visited1) visited1 = Array.of(g.vexnum)
  
  const queue = [g.adjalist[v]];
  visited1[v] = 1

  while (queue.length) {
    const vex = queue.shift()
    let p = vex.first
    
    while (p) {
      if (g.adjalist[p.adjavex] && !visited1[p.adjavex]) {
        visited1[p.adjavex] = 1
        queue.push(g.adjalist[p.adjavex])
      }

      p = p.next
    }
  }
}


let visited2 = undefined
function bfs2(g: Graph, v: number) {
  if (!visited2) visited2 = Array.of(g.vexnum)
  
  const queue = [v];
  visited2[v] = 1

  while (queue.length) {
    const p = queue.shift()

    for (let i = 0; i < g.vexnum; i++) {
      const m = g.arcs[p][i]
      
      if (m && !visited2[i]) {
        visited2[i] = 1
        queue.push(i)
      }
    }
  }
}

