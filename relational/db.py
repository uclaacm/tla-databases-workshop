import sqlite3, os

def get_conn_cursor():
	try:
		path = os.path.dirname(__file__)
		conn = sqlite3.connect(os.path.join(path, "relational.db"))
		cursor = conn.cursor()
		return conn, cursor
	except sqlite3.Error as error:
		print("Error getting conn, cursor for relational.db", error)
		raise sqlite3.Error 

def init_db():
	try:
		conn, cursor = get_conn_cursor()
		sql = '''
		CREATE TABLE IF NOT EXISTS `doggos` (
				`pk` INTEGER PRIMARY KEY,
				`name` TEXT,
				`age` INTEGER,
				`breed` TEXT
			)
		'''
		cursor.execute(sql)
		conn.commit()
		conn.close()
	except sqlite3.Error as error:
		print("Error initializing doggos in relational.db", error)

def get_db():
	try:
		conn, cursor = get_conn_cursor()
		data = cursor.execute("SELECT * FROM `doggos`").fetchall()
		conn.close()
		return data
	except sqlite3.Error as error:
		print("Error fetching data from relational.db")
		return None

def add_row(name, age, breed):
	try:
		conn, cursor = get_conn_cursor()
		sql = '''
		INSERT INTO `doggos` (`name`, `age`, `breed`)
		VALUES (?, ?, ?)
		'''
		cursor.execute(sql, [name, age, breed])
		conn.commit()
		conn.close()
	except sqlite3.Error as error:
		print("Error adding row to relational.db")

def delete_row(pk):
	try:
		conn, cursor = get_conn_cursor()
		sql = '''
		DELETE FROM `doggos`
		WHERE `pk` = (?)
		'''
		cursor.execute(sql, [pk])
		conn.commit()
		conn.close()
	except sqlite3.Error as error:
		print("Error deleting row from relational.db")
