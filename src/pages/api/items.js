// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({items: [
    {title: 'title 1'},
      {title: 'title 2'},
      {title: 'title 3'},
    ]})
}
