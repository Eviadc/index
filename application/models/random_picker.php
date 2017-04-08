<?php

namespace RandomPicker
{
	class RandomPicker
	{
		var $seq = array();
		var $total = 0;

		public function register($content, $freq)
		{
			$this->total += $freq;
			array_push($this->seq, array('content' => $content, 'freq' => $freq));
		}
		public function generate()
		{
			if($this->total <= 1)
				return null;
			$flag = mt_rand(0, $this->total-1);
			foreach ($this->seq as $item)
			{
				$flag -= $item['freq'];
				if($flag < 0)
					return $item['content'];
			}
			return null;
		}
	}
	function genIndexPage()
	{
		$rp = new RandomPicker();

		$rp->register(array('type' => 'the_light', 'variation' => 0), 9);
		$rp->register(array('type' => 'the_light', 'variation' => 1), 1);

		return $rp->generate();
	}
}