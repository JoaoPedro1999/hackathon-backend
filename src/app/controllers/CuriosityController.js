import Curiosity from '../models/Curiosity';

class CuriosityController {
  async index(req, res) {
    const curiosity = await Curiosity.findAll();

    return res.json(curiosity);
  }

  async store(req, res) {
    const { name, text, link, content_id } = req.body();
    const curiosity = await Curiosity.create({ name, text, link, content_id });

    return res.json({
      curiosity,
    });
  }
}

export default new CuriosityController();
