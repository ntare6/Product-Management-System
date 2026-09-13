exports.shorthands = undefined;

exports.up = (pgm) => {
  // 'up' runs when we apply the migration
  pgm.createTable('products', {
    id: 'id', // automatically creates a serial primary key (auto-incrementing)
    name: { type: 'varchar(255)', notNull: true },
    description: { type: 'text' },
    price: { type: 'numeric(10, 2)', notNull: true },
    stock_quantity: { type: 'integer', notNull: true, default: 0 },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  // 'down' runs if we ever need to undo/rollback the migration
  pgm.dropTable('products');
};