<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ErrorHandler extends CI_Controller
{
	public function index($eargs)
	{
		$this->load->view('errors/html/error_404');
	}
}