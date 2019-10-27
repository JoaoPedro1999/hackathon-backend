import Content from '../models/Content';

class ContentController {
  async index(req, res) {
    const content = await Content.findAll();

    return res.json(content);
  }

  async store(req, res) {
    const { name, text, topic_id } = req.body();
    const content = await Content.create({ name, text, topic_id });

    return res.json({
      content,
    });
  }
}

export default new ContentController();
