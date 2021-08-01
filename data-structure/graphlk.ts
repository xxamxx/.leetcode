
/**
 * 邻接表
 */
interface Graphlk {
  adjalist: AdjaList[];
  vexnum: number;
  vrcnum: number;
}

interface ArcNode{
  adjavex: number;
  next: ArcNode;
}

interface AdjaList{
  vertex: number;
  first: ArcNode;
}