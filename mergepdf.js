const PDFMerger=require('pdf-merger-js')
var merger=new PDFMerger();

const merged=async (p1,p2) => {
    merger=new PDFMerger();
    await merger.add(p1);
    await merger.add(p2);
    let d=new Date().getTime()
    await merger.save(`public/${d}.pdf`);
    return d;
}

module.exports={merged};