import { save, find, update, remove } from '.'
import { setupDb } from '../../db'

describe('When using the tasks controller', () => {
  beforeAll(async () => {
    await setupDb()
  })

  describe('CRUD', () => {
    const item = {
      name: 'foo',
      description: 'bar',
      status: false,
    }

    it('should save', async () => {
      const newItem = await save(item)
      expect(newItem).toMatchObject(item)
    })

    it('should read', async () => {
      const items = await find()
      expect(items.length).toBe(1)
      expect(items[0]).toMatchObject(item)
    })

    it('should update', async () => {
      const newProps = { name: 'bar' }
      let items = await find()
      const updatedItem = await update(items[0]._id, newProps)
      expect(updatedItem).not.toMatchObject(item)
      items = await find()
      expect(items[0]).toMatchObject({ ...item, ...newProps })
    })

    it('should delete', async () => {
      let items = await find()
      expect(items.length).toBe(1)
      await remove(items[0]._id)
      items = await find()
      expect(items.length).toBe(0)
    })
  })
})
