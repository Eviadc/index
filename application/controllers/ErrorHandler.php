<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ErrorHandler extends CI_Controller
{
	public function index()
	{
		$data['heading'] = '这个页面还没做';
		$data['message'] = '嘛也有可能是网址输错了';
		$this->load->view('errors/html/error_404', $data);
	}
}