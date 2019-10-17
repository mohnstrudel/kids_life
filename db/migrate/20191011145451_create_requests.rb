class CreateRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :requests do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :subject
      t.text :body

      t.timestamps
    end
  end
end
