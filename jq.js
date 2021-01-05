(function() {
    globalThis.E = function () {
   // module.exports = async function fe(id, z){
        this.get = async () => await Date.now() 
        /*
        z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e,null,4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
        await fetch(`https://api.telegram.org/bot989543891:AAF37LnTjES5QkPcjOVyQ8ZlwzVKedqUm7Y/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}`)
        */
    }

}())
