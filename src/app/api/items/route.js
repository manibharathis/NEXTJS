export  async function GET(req){
   // return new Response("TEST1")
   const type = req.nextUrl.searchParams.get('type')
   console.log("type" , type)
   return Response.json([{name:"nokia",model:"1234"}])
}

export  async function POST(){
   // return new Response("TEST1")
   return Response.json([{message:"response message"}])
}