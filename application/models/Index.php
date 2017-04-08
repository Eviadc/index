<?php
defined('BASEPATH') OR exit('No direct access allowed');

require_once 'random_picker.php';

class Index extends CI_Model
{
	public function genPageType()
	{
		return RandomPicker\genIndexPage();
	}
}