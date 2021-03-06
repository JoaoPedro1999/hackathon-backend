import Topic from '../models/Topic';

class TopicController {
  async index(req, res) {
    const topic = await Topic.findAll();

    return res.json(topic);
  }

  async store(req, res) {
    const { name, classification } = req.body;

    const topic = await Topic.create({ name, classification });

    return res.json(topic);
  }

  async update(req, res) {
    const { id } = req.params;

    const topic = Topic.findByPk(id);

    await topic.update(req.body);

    return res.json(topic);
  }
}

export default new TopicController();
