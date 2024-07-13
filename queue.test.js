const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.enqueue('elemento1');
    queue.enqueue('elemento2');

    expect(queue.size()).toBe(2);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.enqueue('elemento1');

    expect(queue.elements).toEqual(['elemento1']);
  });
  

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue('elemento1');
    queue.enqueue('elemento2');

    expect(queue.peek()).toBe('elemento1');
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.enqueue('elemento1');
    queue.enqueue('elemento2');

    expect(queue.dequeue()).toBe('elemento1');
    expect(queue.elements).toEqual(['elemento2']);
  })
})