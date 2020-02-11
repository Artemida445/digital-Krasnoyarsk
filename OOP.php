<?php
require_once('Absolut.php');




class Uploader {
public $uploaddir;
public $uploadfile;
public $pole2;

	public function __construct($pole2)
	{
		return $this->pole2 = $_FILES[$pole2];
	}

	private function isUploaded()
	{
		if ($this->pole2['error'] !== UPLOAD_ERR_NO_FILE) {
			return true;
		} else {
			return false;
		}
	}
	public function upload()
	{
		if ($this->isUploaded() == true){
			$this->uploaddir = '/var/www/html/all/';
			$this->uploadfile = $this->uploaddir . basename ($_FILES['pole2']['name']);
			move_uploaded_file($_FILES['pole2']['tmp_name'], $this->uploadfile);
			echo 'File moving to '. $this->uploaddir; 
		} else { 
			echo 'ops, error';
		}
	}
}

class GuestBook {
	protected $file;
	public $text;
	public $write;
	public $pole;
	public $tron;


	public function __construct()
	{
		$this->file = fopen("file.txt", "a+");
		//var_dump($this->file);
	}
	public function getData()
	{	
		// return $this->text = file_get_contents("file.txt");
	}
	public function append($pole)
	{
		
		$this->write = fwrite($this->file,"$pole\n");
	}
	public function save()
	{
		$this->tron = file('file.txt');
		//var_dump($this->tron);
	}
}
	$pole = $_POST['pole'];

 $data = new GuestBook();
 $data->getData();
 $data->append($pole);
 $data->save();

$File = new Uploader('pole2');
$File->upload();

?>